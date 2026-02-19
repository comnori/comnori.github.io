import { onCLS, onFCP, onINP, onLCP, onTTFB } from "web-vitals"

const sendToAnalytics = ({ name, delta, value, id }) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, {
      value: delta,
      metric_id: id,
      metric_value: value,
      metric_delta: delta,
    })
  }
}

const reportWebVitals = () => {
  onCLS(sendToAnalytics)
  onFCP(sendToAnalytics)
  onINP(sendToAnalytics)
  onLCP(sendToAnalytics)
  onTTFB(sendToAnalytics)
}

export default reportWebVitals
