@echo Off
set config=%1
if "%config%" == "" (
   set config=Release
)
 
set version=1.2.4.1
set nuget=
if "%nuget%" == "" (
	set nuget=nuget
)

mkdir Build

%nuget% pack ".nuspec" -NoPackageAnalysis -verbosity detailed -o Build -Version %version% -p Configuration="%config%"
