import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@calldesignsystem/react/'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/luizfelipe63.png',
    alt: 'Luix Felipe',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
