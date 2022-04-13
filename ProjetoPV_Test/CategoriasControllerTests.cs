using Microsoft.AspNetCore.Mvc.Testing;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Xunit;

namespace ProjetoPV_Test
{
    public class CategoriasControllerTests : IClassFixture<WebApplicationFactory<Program>>
    {
        readonly HttpClient client;

        public CategoriasControllerTests(WebApplicationFactory<Program> application)
        {
            // Arrange
            client = application.CreateClient();
        }

        [Fact]
        public async Task GetCategoriaAsync_StatusOk()
        {
            // Act
            var response = await client.GetAsync("/api/Categorias");

            // Assert
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        }

        [Fact]
        public async Task GetCategoriaIdAsync_Existing_StatusOk()
        {
            // Act
            var response = await client.GetAsync("/api/Categorias/1");

            // Assert
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        }

        [Fact]
        public async Task GetCategoriaIdAsync_Unexisting_StatusNotFound()
        {
            // Act
            var response = await client.GetAsync("/api/Categorias/999");

            // Assert
            Assert.Equal(HttpStatusCode.NotFound, response.StatusCode);
        }
    }
}