import React, { createContext, useContext, useState } from 'react';

type UserContextType = {
    userID: string | null
    setUserID: React.Dispatch<React.SetStateAction<string>>
}

export const UserContext = createContext<UserContextType>({
    userID: '',
    setUserID: () => {}
});
export const useUserContext = () => useContext(UserContext);
