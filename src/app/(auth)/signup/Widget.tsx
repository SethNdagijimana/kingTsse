"use client"

import { FormField } from "@/components/FormField"

import { Button } from "@/components/ui/button"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const SignupPageWidget = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [phonenumber, setPhonenumber] = useState("")
  const [retypedPassword, setRetypedPassword] = useState("")

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()

  return (
    <div className="w-full md:w-[374px]">
      <div className="flex items-center justify-center mb-16 md:mb-24"></div>

      <div className="container space-y-9">
        <div className="space-y-4 text-center">
          <h1 className="md:text-[2.25rem] text-[1.625rem] text-black font-medium">
            create-account
          </h1>
        </div>

        <form className="space-y-[1.813rem]">
          <fieldset className="space-y-[1.813rem]" disabled={isLoading}>
            <FormField
              type={"email"}
              label="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormField
              type={"text"}
              label="firstName"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <FormField
              type={"text"}
              label="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <FormField
              type={"text"}
              label="phone Number"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />

            <FormField
              label="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onPaste={(e) => e.preventDefault()}
            />

            <FormField
              label="retyped-password"
              type="password"
              value={retypedPassword}
              onChange={(e) => setRetypedPassword(e.target.value)}
              onPaste={(e) => e.preventDefault()}
            />
          </fieldset>

          <Button
            className="w-full bg-black text-white hover:text-black"
            text="continue"
            icon={
              <svg
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3656 12.3382L14.1812 17.8382C14.0781 17.9475 13.9094 18.0007 13.7969 18.0007C13.6723 18.0007 13.5472 17.9577 13.4481 17.8708C13.2365 17.6852 13.2208 17.3689 13.4132 17.1648L17.8094 12.5007H6.01844C5.73184 12.5007 5.5 12.2771 5.5 12.0288C5.5 11.7805 5.73191 11.5007 6.01844 11.5007H17.8091L13.4122 6.83503C13.2198 6.63093 13.2355 6.3144 13.4471 6.12909C13.6593 5.94453 13.9868 5.95818 14.1799 6.16328L19.3643 11.6633C19.5437 11.8538 19.5438 12.1475 19.3656 12.3382Z"
                  fill="white"
                />
              </svg>
            }
            loading={isLoading}
          />
        </form>
        <div className="flex items-center justify-center gap-2 text-sm">
          <p className="text-[0.875rem] text-black">already-have-account</p>

          <Link
            href={`/signin`}
            className="text-purple_500 hover:text-purple_400 transition ease-in-out"
          >
            sign-in
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignupPageWidget
