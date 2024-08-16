# Define the directory to search. Update this path as needed.
$directoryPath = "C:\Users\danha\source\repos\Web\WebTemplate"

# Get all files in the root of the specified directory
$files = Get-ChildItem -Path $directoryPath -File | 
         Where-Object { $_.Extension -in '.mjs', '.json' }

# Debugging: Display the files found
Write-Host "Files found in root:" -ForegroundColor Green
foreach ($file in $files) {
    Write-Host $file.FullName -ForegroundColor Yellow
}

# Initialize a variable to store the content
$allContent = ""

# Loop through each file and append its content to $allContent
foreach ($file in $files) {
    Write-Host "Processing file: $($file.FullName)" -ForegroundColor Cyan
    $content = Get-Content -Path $file.FullName -Raw
    $allContent += $content + "`n"  # Add newline after each file's content
}

# Output the combined content
$allContent
