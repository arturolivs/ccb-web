import React, {
    createContext,
    useContext,
    useCallback,
    useState,
    useMemo,
} from 'react'
import { v4 as uuidv4 } from 'uuid'

import NotificationComponent from '../components/Notification'
import { Box } from '../components/Notification/Notification.styles'
import { Notification } from '../components/Notification/Notification.types'

interface NotificationContextProps {
    addNotification(notification: Omit<Notification, 'id'>): void
    removeNotification(id: string): void
}

const NotificationContext = createContext<NotificationContextProps>(
    {} as NotificationContextProps
)

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
    const [notifications, setNotifications] = useState<Notification[]>([])

    const addNotification = useCallback(
        ({ type, title, message }: Omit<Notification, 'id'>) => {
            const id = uuidv4()

            const notification = {
                id,
                type,
                title,
                message,
            }

            setNotifications((state) => [...state, notification])
        },
        []
    )

    const removeNotification = useCallback((id: string) => {
        setNotifications((state) =>
            state.filter((notification) => notification.id !== id)
        )
    }, [])

    const value = useMemo(
        () => ({
            addNotification,
            removeNotification,
        }),
        [addNotification, removeNotification]
    )

    return (
        <NotificationContext.Provider value={value}>
            {children}
            <Box>
                {notifications.map(({ id, type, title, message }) => (
                    <NotificationComponent
                        key={id}
                        type={type}
                        title={title}
                        message={message}
                    />
                ))}
            </Box>
        </NotificationContext.Provider>
    )
}

function useNotification(): NotificationContextProps {
    const context = useContext(NotificationContext)

    if (!context) {
        throw new Error(
            'useNotification must be used within a NotificationProvider'
        )
    }

    return context
}

export { NotificationProvider, useNotification }
