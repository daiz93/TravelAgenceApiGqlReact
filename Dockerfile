FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /app

# copy .csproj and restore as distinct layers
COPY "Backend/TravelManagementExemple.sln" "Backend/TravelManagementExemple.sln"
COPY "Backend/TravelAPI/TravelAPI.csproj" "Backend/TravelAPI/TravelAPI.csproj"
COPY "Backend/Core/Core.csproj" "Backend/Core/Core.csproj"
COPY "Backend/Infrastructure/Infrastructure.csproj" "Backend/Infrastructure/Infrastructure.csproj"

RUN dotnet restore "Backend/TravelManagementExemple.sln"

# copy everything else build
COPY . .
RUN dotnet publish "Backend/TravelManagementExemple.sln" -c Release -o out

# build a runtime image
FROM mcr.microsoft.com/dotnet/sdk:7.0
COPY --from=build-env /app/out .
ENTRYPOINT [ "dotnet", "TravelAPI.dll" ]