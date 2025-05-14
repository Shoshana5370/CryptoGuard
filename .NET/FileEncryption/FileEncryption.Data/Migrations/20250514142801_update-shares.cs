using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FileEncryption.Data.Migrations
{
    /// <inheritdoc />
    public partial class updateshares : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "RecipientUserId",
                table: "Shares",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SharedByUserId",
                table: "Shares",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Shares",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserId1",
                table: "Shares",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Shares_RecipientUserId",
                table: "Shares",
                column: "RecipientUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Shares_SharedByUserId",
                table: "Shares",
                column: "SharedByUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Shares_UserId",
                table: "Shares",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Shares_UserId1",
                table: "Shares",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Shares_Users_RecipientUserId",
                table: "Shares",
                column: "RecipientUserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK_Shares_Users_SharedByUserId",
                table: "Shares",
                column: "SharedByUserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Shares_Users_UserId",
                table: "Shares",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Shares_Users_UserId1",
                table: "Shares",
                column: "UserId1",
                principalTable: "Users",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Shares_Users_RecipientUserId",
                table: "Shares");

            migrationBuilder.DropForeignKey(
                name: "FK_Shares_Users_SharedByUserId",
                table: "Shares");

            migrationBuilder.DropForeignKey(
                name: "FK_Shares_Users_UserId",
                table: "Shares");

            migrationBuilder.DropForeignKey(
                name: "FK_Shares_Users_UserId1",
                table: "Shares");

            migrationBuilder.DropIndex(
                name: "IX_Shares_RecipientUserId",
                table: "Shares");

            migrationBuilder.DropIndex(
                name: "IX_Shares_SharedByUserId",
                table: "Shares");

            migrationBuilder.DropIndex(
                name: "IX_Shares_UserId",
                table: "Shares");

            migrationBuilder.DropIndex(
                name: "IX_Shares_UserId1",
                table: "Shares");

            migrationBuilder.DropColumn(
                name: "RecipientUserId",
                table: "Shares");

            migrationBuilder.DropColumn(
                name: "SharedByUserId",
                table: "Shares");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Shares");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Shares");
        }
    }
}
