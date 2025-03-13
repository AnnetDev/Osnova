export function openPreferredMessenger(event) {
  event.preventDefault();

  const phoneNumber = '79515475118';
  const message = encodeURIComponent('Здравствуйте, я хотел(а) бы приобрести сертификат');

  const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
  const telegramUrl = 'tg://resolve?domain=@irinavrnmassage';
  const viberUrl = `viber://chat?number=+${phoneNumber}`;
  const callUrl = `tel:+${phoneNumber}`;

  // Пробуем открыть WhatsApp
  window.location.href = whatsappUrl;

  // Если WhatsApp не установлен, через 1 секунду пробуем Telegram
  setTimeout(() => {
    if (document.visibilityState === 'visible') {
      window.location.href = telegramUrl;
    }
  }, 1000);

  // Если Telegram не установлен, через 2 секунды пробуем Viber
  setTimeout(() => {
    if (document.visibilityState === 'visible') {
      window.location.href = viberUrl;
    }
  }, 2000);

  // Если ничего не сработало, через 3 секунды предлагаем позвонить
  setTimeout(() => {
    if (document.visibilityState === 'visible') {
      window.location.href = callUrl;
    }
  }, 3000);
}
