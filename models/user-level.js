class UserLevel {
    constructor(Id, Deleted, UserId, Date, ReachedLevel, GainedScore){
        this.Id = Id;
        this.Deleted = Deleted;
        this.UserId = UserId;
        this.Date = Date;
        this.ReachedLevel = ReachedLevel;
        this.GainedScore = GainedScore;
    }
}

module.exports = UserLevel;