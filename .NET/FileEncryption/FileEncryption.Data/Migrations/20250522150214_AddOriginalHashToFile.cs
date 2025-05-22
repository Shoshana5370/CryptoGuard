using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FileEncryption.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddOriginalHashToFile : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "OriginalHash",
                table: "Files",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OriginalHash",
                table: "Files");
        }
    }
}
