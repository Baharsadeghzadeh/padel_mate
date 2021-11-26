CREATE PROCEDURE sp_getUserLevel
(
	@UserId INT
) AS
	SELECT TOP 1 [ReachedLevel], [GainedScore] FROM [dbo].[tbl_userLevel]
	WHERE
		[UserId] = @UserId AND
		[Deleted] = 0
	ORDER BY [Date] DESC