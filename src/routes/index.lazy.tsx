import { createLazyFileRoute } from '@tanstack/react-router'
import { Address } from '../components/Ton/Address/Address'
import { Wallet } from '../components/Ton/Wallet/Wallet'
import { TonConnectButton } from '@tonconnect/ui-react'
import { Counter } from '../components/Ton/Counter/Counter'

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