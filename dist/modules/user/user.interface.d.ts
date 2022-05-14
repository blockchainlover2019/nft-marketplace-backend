export declare enum UserRole {
    Admin = "admin",
    Creator = "creator",
    User = "user"
}
export declare enum UserStatus {
    creator = "creator",
    admin = "admin",
    user = "user",
    active = "active",
    inactive = "inactive"
}
export declare class Social {
    youtube?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    discord?: string;
    telegram?: string;
}
export declare class User {
    id: string;
    walletAddress?: string;
    email: string;
    username: string;
    job: string;
    personalWebsite: string;
    phoneNumber: string;
    timezone: string;
    avatar: string;
    role: string;
    status: string;
    createdAt: number;
    social?: Social;
    deletedAt: number;
    isGoogle: boolean;
}
