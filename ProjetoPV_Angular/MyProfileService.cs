using Duende.IdentityServer.Models;
using Duende.IdentityServer.Services;
using IdentityModel;
using System.Security.Claims;

public class MyProfileService : IProfileService
{
    public MyProfileService()
    { }

    public Task GetProfileDataAsync(ProfileDataRequestContext context)
    {
        //get role claims from ClaimsPrincipal 
        //var roleClaims = context.Subject.FindAll(JwtClaimTypes.Role);

        var roleClaims = context.Subject.FindAll(ClaimTypes.Role);

        //add your role claims 
        context.IssuedClaims.AddRange(roleClaims);
        return Task.CompletedTask;
    }

    public Task IsActiveAsync(IsActiveContext context)
    {
        // await base.IsActiveAsync(context);
        return Task.CompletedTask;
    }
}