import { createLazyFileRoute } from '@tanstack/react-router'
import { TonConnectButton } from '@tonconnect/ui-react'

import { Address } from '~/components/Ton/Address/Address'
import { Counter } from '~/components/Ton/Counter/Counter'
import { Wallet } from '~/components/Ton/Wallet/Wallet'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-4">
      <Address />
      <Wallet />
      <Counter />
      <TonConnectButton className='ml-32 min-w-max' />
    </div>
  )
}