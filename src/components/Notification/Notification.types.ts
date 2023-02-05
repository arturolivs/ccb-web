export type NotificationType = 'success' | 'error'

export interface Notification {
    id: string
    type: NotificationType
    title: string
    message: string
    onClose?: (id: string) => void
}
