using Infrastructure.Data;
using Infrastructure.IRepositories;
using Infrastructure.Repositories;
using Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using TravelAPI.Graphql;

var builder = WebApplication.CreateBuilder(args);
var AllowSpecificOrigins = "_allowAllOrigins";
// Add services to the container.
builder.Services.AddDbContextFactory<TDbContext>(options => 
{
    options.UseSqlite(builder.Configuration["ConnectionStrings:DefaultConnection"]);
});


builder.Services.AddScoped<IClientRepository, ClientRepository>();
builder.Services.AddScoped<IClientService, ClientService>();

builder.Services.AddScoped<ITypeVoyageRepository, TypeVoyageRepository>();
builder.Services.AddScoped<ITypeVoyageService, TypeVoyageService>();


builder.Services.AddScoped<IHotelRepository, HotelRepository>();
builder.Services.AddScoped<IHotelService, HotelService>();


builder.Services.AddScoped<IDossierRepository, DossierRepository>();
builder.Services.AddScoped<IDossierService, DossierService>();

 

 // graphql
builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddFiltering()
    .AddSorting()
    
    ;

    // cors
builder.Services.AddCors(options => 
{
    options.AddPolicy(name: AllowSpecificOrigins,
        policy => 
        {
            policy.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddMvc(option => option.EnableEndpointRouting = false);
builder.Services.AddRouting();
var app = builder.Build();


app.UseCors(AllowSpecificOrigins);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseRouting();
app.UseEndpoints(endpoints =>
{
    endpoints.MapFallbackToController("Index", "Website");
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapGraphQL();
//Migrations

try
{
    var scope = app.Services.CreateScope();
    var context = scope.ServiceProvider.GetRequiredService<TDbContext>();
    //context.Database.EnsureCreated();
    context.Database.Migrate();
}
catch(Exception ex)
{
    var logger = app.Services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "La migration n'a pas pu être éffectuée. Aucune base de données disponible. Veuillez la créé manuellement.");
} 

app.Run();
