class UserActivity {
    constructor(Id, Deleted, UserId, Date, StartTime, EndTime, Location, LevelInt, PrivateBit, PlayersCoundId, CourtBookedBit){
        this.Id = Id;
        this.Deleted = Deleted;
        this.UserId = UserId;
        this.Date = Date;
        this.StartTime = StartTime;
        this.EndTime - EndTime;
        this.Location = Location;
        this.LevelInt = LevelInt;
        this.PrivateBit = PrivateBit;
        this.PlayersCoundId = PlayersCoundId;
        this.CourtBookedBit = CourtBookedBit;
        this.PlayerOneUserId = PlayerOneUserId;
        this.PlayerTwoUserId = PlayerTwoUserId;
        this.PlayerThreeUserId = PlayerThreeUserId;
        this.PlayerFourUserId = PlayerFourUserId;
    }
}

module.exports = UserActivity;