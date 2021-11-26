class UserPlacement {
    constructor(Id, Deleted, UserId, QuestionOneInt, QuestionTwoInt, QuestionThreeInt, QuestionFourInt, QuestionFiveInt, 
        AlgorithmLevelInt, UserStateLevelInt, UserFirstLevelInt){
        this.Id = Id;
        this.Deleted = Deleted;
        this.UserId = UserId;
        this.QuestionOneInt = QuestionOneInt;
        this.QuestionTwoInt = QuestionTwoInt;
        this.QuestionThreeInt = QuestionThreeInt;
        this.QuestionFourInt = QuestionFourInt;
        this.QuestionFiveInt = QuestionFiveInt;
        this.AlgorithmLevelInt = AlgorithmLevelInt;
        this.UserStateLevelInt = UserStateLevelInt;
        this.UserFirstLevelInt = UserFirstLevelInt;
    }
}

module.exports = UserPlacement;