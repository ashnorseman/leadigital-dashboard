import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '正泰高压电气设备（武汉）有限公司智造一体化平台',
  description: '正泰高压电气设备（武汉）有限公司智造一体化平台',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
