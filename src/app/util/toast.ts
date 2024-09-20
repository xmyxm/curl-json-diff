class Toast {
	private container: HTMLDivElement

	constructor() {
		this.container = document.createElement('div')
		this.container.className = 'toast-container'
		document.body.appendChild(this.container)

		// 动态添加样式
		this.addStyles()
	}

	private addStyles(): void {
		const style = document.createElement('style')
		style.innerHTML = `
            .toast-container {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 9999;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .toast {
                margin-bottom: 10px;
                background-color: #333;
                color: #fff;
                text-align: center;
                border-radius: 4px;
                padding: 10px 20px;
                font-size: 16px;
                opacity: 0;
                transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
                transform: translateY(20px);
            }
            .toast.show {
                opacity: 1;
                transform: translateY(0);
            }
        `
		document.head.appendChild(style)
	}

	public show(message: string, duration: number = 3000): void {
		const toast = document.createElement('div')
		toast.className = 'toast'
		toast.innerText = message
		this.container.appendChild(toast)

		// 使用 setTimeout 显示 Toast 消息
		setTimeout(() => {
			toast.classList.add('show')
		}, 100)

		// 使用 setTimeout 隐藏 Toast 消息
		setTimeout(() => {
			toast.classList.remove('show')
			setTimeout(() => {
				this.container.removeChild(toast)
			}, 300)
		}, duration)
	}
}

// 初始化 Toast SDK
const toast = new Toast()

export default toast
// 示例：调用 show 方法显示 Toast 消息
// toast.show('操作成功！', 3000);
