"use client"

import * as React from "react"
import { cn } from "@mijn-ui/utils"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { LuCircle } from "react-icons/lu"

type RadioGroupProps = React.ComponentPropsWithRef<
  typeof RadioGroupPrimitive.Root
>

const RadioGroup = ({ className, ref, ...props }: RadioGroupProps) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
}
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

type RadioGroupItemProps = React.ComponentPropsWithRef<
  typeof RadioGroupPrimitive.Item
>

const RadioGroupItem = ({ className, ref, ...props }: RadioGroupItemProps) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-main focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <LuCircle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
