'use client'

import React, { useState } from 'react'

type ContactFormProps = {
  namePlaceholder: string
  contactPlaceholder: string
  messagePlaceholder: string
  submitBtn: string
  loadingBtn: string
  successTitle: string
  successSub: string
  sendAnother: string
  errorMsg: string
}

export function ContactForm({
  namePlaceholder,
  contactPlaceholder,
  messagePlaceholder,
  submitBtn,
  loadingBtn,
  successTitle,
  successSub,
  sendAnother,
  errorMsg
}: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    // Add your Web3Forms Access Key here when ready
    formData.append("access_key", "cbafaa2c-6d99-4486-ba2e-1e1c01366dbd")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      
      const data = await response.json()
      
      if (data.success) {
        setStatus('success')
        e.currentTarget.reset()
      } else {
        console.error(data)
        setStatus('error')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-[color:var(--bg-card)] rounded-lg border border-[color:var(--border)]">
        <h3 className="text-xl font-serif text-[color:var(--text-primary)] mb-2">{successTitle}</h3>
        <p className="text-[color:var(--text-secondary)]">{successSub}</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-[color:var(--accent)] hover:underline"
        >
          {sendAnother}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <input type="hidden" name="subject" value="Новая заявка с сайта!" />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
      
      <div>
        <label htmlFor="name" className="sr-only">Имя</label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          required 
          placeholder={namePlaceholder}
          className="w-full bg-[color:var(--bg-card)] border border-[color:var(--border)] rounded px-4 py-3 text-[color:var(--text-primary)] focus:outline-none focus:border-[color:var(--accent)]"
        />
      </div>

      <div>
        <label htmlFor="contact" className="sr-only">Контакт</label>
        <input 
          type="text" 
          name="contact" 
          id="contact" 
          required 
          placeholder={contactPlaceholder}
          className="w-full bg-[color:var(--bg-card)] border border-[color:var(--border)] rounded px-4 py-3 text-[color:var(--text-primary)] focus:outline-none focus:border-[color:var(--accent)]"
        />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">Сообщение</label>
        <textarea 
          name="message" 
          id="message" 
          required 
          rows={4}
          placeholder={messagePlaceholder}
          className="w-full bg-[color:var(--bg-card)] border border-[color:var(--border)] rounded px-4 py-3 text-[color:var(--text-primary)] focus:outline-none focus:border-[color:var(--accent)] resize-none"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="w-full rounded px-6 py-3 font-medium transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ backgroundColor: 'var(--accent)', color: 'var(--bg-primary)' }}
      >
        {status === 'loading' ? loadingBtn : submitBtn}
      </button>

      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">{errorMsg}</p>
      )}
    </form>
  )
}
