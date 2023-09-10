import { Locale } from "@/i18n"

interface AuthLayoutProps {
  children: React.ReactNode
  params: {
    lang: Locale
  }
}

const AuthLayout = async ({ children, params: { lang } }: AuthLayoutProps) => {
  // const session = await getServerSession(authOptions)

  // if (session) {
  //   redirect(`/${lang}/dashboard/simple`)
  // }

  return (
    <div className="py-16 min-h-[100dvh] bg-slate-100 container grid place-items-center select-none">
      <>{children}</>
    </div>
  )
}

export default AuthLayout
