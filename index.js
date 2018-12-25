const skill = {}

skill.handle = async event => {
  const { type, text, group, bot } = event
  if (type === 'Message4Bot' && text === 'ping') {
    await bot.sendMessage(group.id, 'pong')
  }
}

export default skill
