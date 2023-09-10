"use client"

import { FormField } from "@/components/FormField"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const SigninPageWidget = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email || !password) {
      toast({
        variant: "destructive",
        description: "all-fields-are-required"
      })

      return
    }

    setIsLoading(true)

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false
      })

      if (result?.error) {
        toast({
          variant: "destructive",
          description: result.error
        })

        setIsLoading(false)

        return
      }

      router.push(`/dashboard/simple`)
    } catch (error) {
      toast({
        variant: "destructive",
        description: "error-message"
      })

      setIsLoading(false)
    }
  }

  return (
    <div className="w-full md:w-[374px] ">
      <div className="container space-y-9">
        <div className="text-center space-y-4">
          <h1 className="md:text-[2.25rem] text-[1.625rem] text-black font-medium">
            welcome
          </h1>
        </div>

        <form onSubmit={onSubmitHandler} className="space-y-[1.813rem] ">
          <fieldset className="space-y-[1.813rem]" disabled={isLoading}>
            <FormField
              label="email"
              type="email"
              value="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="block space-y-2">
              <FormField
                label="password"
                type="password"
                value="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link
                href={`/reset-password`}
                className="text-purple_500 flex justify-end hover:text-purple_400 transition ease-in-out text-sm"
              >
                forgot-Password
              </Link>
            </div>
          </fieldset>

          <Button
            className="w-full bg-black text-white  hover:text-black"
            text="continue"
            loading={isLoading}
          />
        </form>
        <div className="flex justify-center items-center gap-2 text-sm">
          <p className="text-black">no-account</p>
          <Link
            href={"/signup"}
            className="text-purple_500 hover:text-purple_400 transition ease-in-out"
          >
            sign-up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SigninPageWidget
