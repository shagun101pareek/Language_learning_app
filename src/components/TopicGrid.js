import TopicItem from './TopicItem'

export default function TopicGrid() {
  const leftTopics = [
    "Basic greetings",
    "Self introduction",
    "Profession & nationalities"
  ]
  
  const rightTopics = [
    "Your hometown",
    "Your family",
    "Prac"
  ]

  return (
    <div className="grid grid-cols-2 gap-3 mb-8">
      <div className="space-y-3">
        {leftTopics.map((topic, index) => (
          <TopicItem key={index} title={topic} />
        ))}
      </div>
      <div className="space-y-3">
        {rightTopics.map((topic, index) => (
          <TopicItem key={index} title={topic} />
        ))}
      </div>
    </div>
  )
}