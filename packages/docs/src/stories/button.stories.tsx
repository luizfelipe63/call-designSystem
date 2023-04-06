import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react/'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secundary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Creat new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WhithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight />
      </>
    ),
  },
}

export const Disable: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
