export type NotificationType = 'success' | 'error'

export interface Notification {
    id: string
    type: NotificationType
    title: string
    message: string
    close?: (id: string) => void
}
