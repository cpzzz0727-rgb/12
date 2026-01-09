# Burger O'clock Automation Deployment Script
# Purpose: One-click build, clean, and deploy process

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Burger O'clock Deployment Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Run npm run build
Write-Host "[1/4] Running npm run build..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Build failed! Please check error messages." -ForegroundColor Red
    exit 1
}
Write-Host "OK: Build completed" -ForegroundColor Green
Write-Host ""

# Step 2: Clean old assets folder in root directory
Write-Host "[2/4] Cleaning old assets folder..." -ForegroundColor Yellow
if (Test-Path "assets") {
    Remove-Item -Path "assets" -Recurse -Force
    Write-Host "OK: Old assets folder deleted" -ForegroundColor Green
} else {
    Write-Host "INFO: assets folder does not exist, skipping" -ForegroundColor Gray
}
Write-Host ""

# Step 3: Copy all content from dist/ to root directory
Write-Host "[3/4] Copying dist/ content to root directory..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Copy-Item -Path "dist\*" -Destination "." -Recurse -Force
    Write-Host "OK: Files copied" -ForegroundColor Green
} else {
    Write-Host "ERROR: dist folder does not exist! Build may have failed." -ForegroundColor Red
    exit 1
}
Write-Host ""

# Step 4: Verify file references
Write-Host "[4/4] Verifying file references..." -ForegroundColor Yellow

# Check files in assets folder
$assetsFiles = Get-ChildItem -Path "assets" -File | Select-Object -ExpandProperty Name
$jsFiles = $assetsFiles | Where-Object { $_ -like "index-*.js" }
$cssFiles = $assetsFiles | Where-Object { $_ -like "index-*.css" }

if ($jsFiles.Count -eq 0 -or $cssFiles.Count -eq 0) {
    Write-Host "ERROR: Required files missing in assets folder!" -ForegroundColor Red
    exit 1
}

# Read index.html and check references
$indexHtml = Get-Content "index.html" -Raw -Encoding UTF8
$jsFile = $jsFiles[0]
$cssFile = $cssFiles[0]

# Check JS reference
if ($indexHtml -match 'src="\./assets/([^"]+)"') {
    $referencedJs = $matches[1]
    if ($referencedJs -ne $jsFile) {
        Write-Host "WARNING: index.html JS reference ($referencedJs) does not match actual file ($jsFile)" -ForegroundColor Yellow
        Write-Host "  Auto-fixing..." -ForegroundColor Yellow
        $indexHtml = $indexHtml -replace 'src="\./assets/[^"]+"', "src=`"./assets/$jsFile`""
    } else {
        Write-Host "OK: JS reference correct: $jsFile" -ForegroundColor Green
    }
} else {
    Write-Host "WARNING: Could not find JS reference in index.html" -ForegroundColor Yellow
    $indexHtml = $indexHtml -replace '<script type="module" crossorigin src="[^"]+"></script>', "<script type=`"module`" crossorigin src=`"./assets/$jsFile`"></script>"
    Write-Host "  Auto-fixing JS reference..." -ForegroundColor Yellow
}

# Check CSS reference
if ($indexHtml -match 'href="\./assets/([^"]+)"') {
    $referencedCss = $matches[1]
    if ($referencedCss -ne $cssFile) {
        Write-Host "WARNING: index.html CSS reference ($referencedCss) does not match actual file ($cssFile)" -ForegroundColor Yellow
        Write-Host "  Auto-fixing..." -ForegroundColor Yellow
        $indexHtml = $indexHtml -replace 'href="\./assets/[^"]+"', "href=`"./assets/$cssFile`""
    } else {
        Write-Host "OK: CSS reference correct: $cssFile" -ForegroundColor Green
    }
} else {
    Write-Host "WARNING: Could not find CSS reference in index.html" -ForegroundColor Yellow
    $indexHtml = $indexHtml -replace '<link rel="stylesheet" crossorigin href="[^"]+">', "<link rel=`"stylesheet`" crossorigin href=`"./assets/$cssFile`">"
    Write-Host "  Auto-fixing CSS reference..." -ForegroundColor Yellow
}

# Save the fixed index.html
Set-Content -Path "index.html" -Value $indexHtml -NoNewline -Encoding UTF8

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "OK: Deployment completed!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Build files updated to root directory" -ForegroundColor White
Write-Host "File references verified and fixed" -ForegroundColor White
Write-Host ""
Write-Host "Next step: Push root directory files to GitHub Pages" -ForegroundColor Yellow
