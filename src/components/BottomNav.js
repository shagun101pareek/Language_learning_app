export default function BottomNav() {
    const navItems = [
      { icon: "📚", label: "Learn", active: true },
      { icon: "🔤", label: "Words" },
      { icon: "🏆", label: "Leagues" },
      { icon: "👤", label: "You" }
    ]
  
    return (
      <div className="flex justify-between border-t border-gray-200 pt-3">
        {navItems.map((item, index) => (
          <div 
            key={index}
            className={`flex flex-col items-center px-2 py-1 ${item.active ? 'text-primary' : 'text-text-gray'}`}
          >
            <span className="text-xl mb-1">{item.icon}</span>
            <span className="text-xs">{item.label}</span>
          </div>
        ))}
      </div>
    )
  }