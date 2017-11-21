export class ColumnSetting {
    primaryKey: string;
    header?: string;
    title?: string;
    format?: string;
}

export class ReviewRating {
    comments? = '' ;
    communicationAbilities? = '';
    dependability? = '';
    flexibility? = '';
    initiative? = '';
    interpersonalSkills = '';
    jobKnowledge = '';
    organization = '';
    workQuality = '';
}

export class EmployeeRating {
    averageRating?: number;
    reviewStatus?: boolean;
    completedDate?: string;
}
