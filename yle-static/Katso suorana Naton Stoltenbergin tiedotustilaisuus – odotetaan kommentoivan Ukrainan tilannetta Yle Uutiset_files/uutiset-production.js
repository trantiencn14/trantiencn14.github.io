yleTagManager.loadAnalyticsScript('//analytics-sdk.yle.fi/yle-analytics.min.js', function() {
  yleAnalytics.accounts.addAccounts([
    {
      type: 'comscore',
      id: 'uutiset'
    },
    {
      type: 'adobe',
      id: 'uutiset'
    },
    {
      type: 'chartbeat',
      id: 'yle.fi'
    },
    {
      type: 'audienceproject',
      id: {
        section:  '9db42490-efb2-435c-ba23-ad87b5b4a247',
        media:    '89ac7509-a992-40e5-9c55-7b1f9503ee7a'
      }
    }
  ])

  if (yleAnalytics.attachLinkTrackingToClickEvents) {
    yleAnalytics.attachLinkTrackingToClickEvents()
  }
})
