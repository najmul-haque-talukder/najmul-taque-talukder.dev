export type Activity = {
  id: string
  role: string
  organization: string
  period: {
    start: string
    end?: string
  }
  description?: string
  url?: string
  iconName?: string
}
