using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FileEncryption.Data.Migrations
{
    /// <inheritdoc />
    public partial class correctNullReference : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "AccessCode",
                table: "Shares",
                type: "longtext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Shares",
                keyColumn: "AccessCode",
                keyValue: null,
                column: "AccessCode",
                value: "");

            migrationBuilder.AlterColumn<string>(
                name: "AccessCode",
                table: "Shares",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");
        }
    }
}
