# To remove the cache from git 
`git rm -r --cached .vscode`

# To remove a specific file type from all the subdirectories

`Get-ChildItem -Recurse -Filter tempCodeRunnerFile.cpp | Remove-Item -Force`