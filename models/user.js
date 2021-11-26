class user {
    constructor(Id, Deleted, Name, Email, Phone, Password, Biography, Facebook, Instagram, DefaultLanguageInt, GenderInt, 
        Picture, ShowTelephoneNoBit, ShowUpcomingGamesBit, CalendarPermissionBit){
        this.Id = Id;
        this.Deleted = Deleted;
        this.Name = Name;
        this.Email = Email;
        this.Phone = Phone;
        this.Password = Password;
        this.Biography = Biography;
        this.Facebook = Facebook;
        this.Instagram = Instagram;
        this.DefaultLanguageInt = DefaultLanguageInt;
        this.GenderInt = GenderInt;
        this.Picture = Picture;
        this.ShowTelephoneNoBit = ShowTelephoneNoBit;
        this.ShowUpcomingGamesBit = ShowUpcomingGamesBit;
        this.ShowPlayedGamesBit = ShowPlayedGamesBit;
        this.CalendarPermissionBit = CalendarPermissionBit;
    }
}

module.exports = user;