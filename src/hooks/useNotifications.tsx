import React, {
    createContext,
    useContext,
    useCallback,
    useState,
    useMemo,
} from 'react'
import { v4 as uuidv4 } from 'uuid'

import NotificationComponent from '../components/Notification'
import { Notifications } from '../components/Notification/Notification.styles'
import { Notification } from '../components/Notification/Notification.types'

interface NotificationContextProps {
    success(title: string, message: string): void
    error(title: string, message: string): void
}

const NotificationContext = createContext<NotificationContextProps>(
    {} as NotificationContextProps
)

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
    const [notifications, setNotifications] = useState<Notification[]>([])

    const add = useCallback(
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

    const close = useCallback((id: string) => {
        setNotifications((state) =>
            state.filter((notification) => notification.id !== id)
        )
    }, [])

    const success = useCallback(
        (title, message) => add({ type: 'success', title, message }),
        [add]
    )

    const error = useCallback(
        (title, message) => add({ type: 'error', title, message }),
        [add]
    )

    const value = useMemo(
        () => ({
            success,
            error,
        }),
        [success, error]
    )

    return (
        <NotificationContext.Provider value={value}>
            {children}
            <Notifications>
                {notifications.map(({ id, type, title, message }) => (
                    <NotificationComponent
                        key={id}
                        id={id}
                        type={type}
                        title={title}
                        message={message}
                        onClose={close}
                    />
                ))}
            </Notifications>
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
