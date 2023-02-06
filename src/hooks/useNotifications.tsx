import React, {
    createContext,
    useContext,
    useCallback,
    useState,
    useMemo,
} from 'react'
import { v4 as uuidv4 } from 'uuid'

import NotificationComponent from '../components/Notification'
import { SECONDS_OF_DISPLAY } from '../components/Notification/Notification.constants'
import { Notifications } from '../components/Notification/Notification.styles'
import { Notification } from '../components/Notification/Notification.types'

interface NotificationContextProps {
    showSuccess(title: string, message: string): void
    showError(title: string, message: string): void
}

const NotificationContext = createContext<NotificationContextProps>(
    {} as NotificationContextProps
)

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
    const [notifications, setNotifications] = useState<Notification[]>([])

    const remove = useCallback((id: string) => {
        setNotifications((state) =>
            state.filter((notification) => notification.id !== id)
        )
    }, [])

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

            setTimeout(() => remove(id), SECONDS_OF_DISPLAY * 1000)
        },
        [remove]
    )

    const showSuccess = useCallback(
        (title, message) => add({ type: 'success', title, message }),
        [add]
    )

    const showError = useCallback(
        (title, message) => add({ type: 'error', title, message }),
        [add]
    )

    const value = useMemo(
        () => ({
            showSuccess,
            showError,
        }),
        [showSuccess, showError]
    )

    return (
        <NotificationContext.Provider value={value}>
            {children}

            {notifications.length > 0 && (
                <Notifications>
                    {notifications.map(({ id, type, title, message }) => (
                        <NotificationComponent
                            key={id}
                            id={id}
                            type={type}
                            title={title}
                            message={message}
                            close={remove}
                        />
                    ))}
                </Notifications>
            )}
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
