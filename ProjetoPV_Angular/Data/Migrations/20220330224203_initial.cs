using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjetoPV_Angular.Data.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cliente",
                columns: table => new
                {
                    ClienteId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cliente", x => x.ClienteId);
                });

            migrationBuilder.CreateTable(
                name: "TipoConta",
                columns: table => new
                {
                    TipoContaId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Descricao = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TipoConta", x => x.TipoContaId);
                });

            migrationBuilder.CreateTable(
                name: "TipoTransacao",
                columns: table => new
                {
                    TipoTransacaoId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Descricao = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TipoTransacao", x => x.TipoTransacaoId);
                });

            migrationBuilder.CreateTable(
                name: "Categoria",
                columns: table => new
                {
                    CategoriaId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Descricao = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ClienteId = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categoria", x => x.CategoriaId);
                    table.ForeignKey(
                        name: "FK_Categoria_Cliente_ClienteId",
                        column: x => x.ClienteId,
                        principalTable: "Cliente",
                        principalColumn: "ClienteId");
                });

            migrationBuilder.InsertData(
                table: "Categoria",
                columns: new[] { "CategoriaId", "ClienteId", "Descricao", "Nome" },
                values: new object[,]
                {
                    { 1L, null, "Categoria destinada a gastos com transportes.", "Transportes" },
                    { 2L, null, "Categoria destinada a gastos com alimentação.", "Comida e Bebida" },
                    { 3L, null, "Categoria destinada a gastos no supermercado.", "Supermercado" },
                    { 4L, null, "Categoria destinada a gastos com a habitação.", "Habitação" }
                });

            migrationBuilder.InsertData(
                table: "TipoConta",
                columns: new[] { "TipoContaId", "Descricao" },
                values: new object[,]
                {
                    { 1L, 0 },
                    { 2L, 1 },
                    { 3L, 3 },
                    { 4L, 2 },
                    { 5L, 8 },
                    { 6L, 9 },
                    { 7L, 7 },
                    { 8L, 6 },
                    { 9L, 5 },
                    { 10L, 4 }
                });

            migrationBuilder.InsertData(
                table: "TipoTransacao",
                columns: new[] { "TipoTransacaoId", "Descricao" },
                values: new object[,]
                {
                    { 1L, 0 },
                    { 2L, 1 },
                    { 3L, 2 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Categoria_ClienteId",
                table: "Categoria",
                column: "ClienteId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Categoria");

            migrationBuilder.DropTable(
                name: "TipoConta");

            migrationBuilder.DropTable(
                name: "TipoTransacao");

            migrationBuilder.DropTable(
                name: "Cliente");
        }
    }
}
