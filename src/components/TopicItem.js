export default function TopicItem({ title }) {
    return (
      <div className="bg-card-light p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition">
        <p className="text-text-dark text-sm font-medium">{title}</p>
      </div>
    )
  }