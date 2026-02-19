const reportWebVitals = () => {
  import("web-vitals")
    .then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
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

      onCLS(sendToAnalytics)
      onFCP(sendToAnalytics)
      onINP(sendToAnalytics)
      onLCP(sendToAnalytics)
      onTTFB(sendToAnalytics)
    })
    .catch((error) => {
      console.error("Failed to load web-vitals", error)
    })
}

export default reportWebVitals
