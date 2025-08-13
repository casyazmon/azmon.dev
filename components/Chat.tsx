import React from 'react'

const Chat = () => {
  return (
    <div style={{ maxWidth: 400, margin: '40px auto', border: '1px solid #e0e0e0', borderRadius: 8, boxShadow: '0 2px 8px #f0f0f0', display: 'flex', flexDirection: 'column', height: 500, background: '#fff' }}>
      <div style={{ padding: '16px', borderBottom: '1px solid #e0e0e0', fontWeight: 600, fontSize: 18 }}>
        Chat
      </div>
      <div style={{ flex: 1, padding: '16px', overflowY: 'auto', background: '#fafafa' }}>
        {/* Messages will appear here */}
        <div style={{ marginBottom: 12, alignSelf: 'flex-start', background: '#e3f2fd', padding: '8px 12px', borderRadius: 16, maxWidth: '75%' }}>
          Hello! How can I help you?
        </div>
        <div style={{ marginBottom: 12, alignSelf: 'flex-end', background: '#c8e6c9', padding: '8px 12px', borderRadius: 16, maxWidth: '75%' }}>
          I have a question about my order.
        </div>
      </div>
      <form style={{ display: 'flex', borderTop: '1px solid #e0e0e0', padding: 12 }}>
        <input
          type="text"
          placeholder="Type your message..."
          style={{ flex: 1, border: 'none', outline: 'none', padding: 10, borderRadius: 20, background: '#f5f5f5', marginRight: 8 }}
        />
        <button type="submit" style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: 20, padding: '8px 16px', cursor: 'pointer' }}>
          Send
        </button>
      </form>
    </div>
  )
}

export default Chat