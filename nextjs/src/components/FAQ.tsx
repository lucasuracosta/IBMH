import Accordion from '@/components/Accordion'
import { info } from '@/data/beliefs'

export default function FAQ() {
  return (
    <div>
      {info.map((i, index) => (
        <Accordion key={index} title={i.title} answer={i.answer} />
      ))}
    </div>
  )
}
