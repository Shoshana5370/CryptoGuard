using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FileEncryption.Data.Migrations
{
    /// <inheritdoc />
    public partial class addSha256 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "isDelete",
                table: "Files",
                newName: "IsDelete");

            migrationBuilder.AddColumn<string>(
                name: "Sha256",
                table: "Files",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Sha256",
                table: "Files");

            migrationBuilder.RenameColumn(
                name: "IsDelete",
                table: "Files",
                newName: "isDelete");
        }
    }
}
