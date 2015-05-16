using System;
using UnityEngine;
using GoogleMobileAds;
using GoogleMobileAds.Api;

// Example script showing how to invoke the Google Mobile Ads Unity plugin.
public class GoogleMobileAdsManager : MonoBehaviour
{
	public static GoogleMobileAdsManager Instance;
    private BannerView bannerView;
    private InterstitialAd interstitial;
	public delegate void GoogleInterstitialNotLoaded();
	public static event GoogleInterstitialNotLoaded OnGoogleInterstitialNotLoaded;
	public delegate void GoogleInterstitialClosed();
	public static event GoogleInterstitialClosed OnGoogleInterstitialClosed;
	public int interstitialcountrequest;
	void Awake()
	{
		if(Instance==null) Instance = this;
		else Destroy(gameObject);
		DontDestroyOnLoad(this.transform);
	}

	void Start()
	{
		//RequestOwnInterstitial();
	}

	void OnLevelWasLoaded(int index)
	{
		RequestOwnInterstitial();
	}

  public void ShowAdmobInterstitial()
	{
		ShowInterstitial();
	}

	public void RequestAdmobBanner()
        {
            RequestBanner();
        }

	public void ShowBanner()
		{
            bannerView.Show();
        }

	public void HideBanner()
		{
		if(bannerView!=null)
            bannerView.Hide();
        }

	public void DestroyBanner()
        {
            bannerView.Destroy();
        }

	public void  RequestOwnInterstitial()
		{
            RequestInterstitial();
        }

public void DestroyInterstitial()
	{
            interstitial.Destroy();
    }

    private void RequestBanner()
    {
        #if UNITY_EDITOR
            string adUnitId = "unused";
        #elif UNITY_ANDROID
		string adUnitId = "ca-app-pub-9393438190116381/8396882597";
        #elif UNITY_IPHONE
            string adUnitId = "INSERT_IOS_BANNER_AD_UNIT_ID_HERE";
        #else
            string adUnitId = "unexpected_platform";
        #endif

        // Create a 320x50 banner at the top of the screen.
        bannerView = new BannerView(adUnitId, AdSize.SmartBanner, AdPosition.Bottom);
        // Register for ad events.
        bannerView.AdLoaded += HandleAdLoaded;
        bannerView.AdFailedToLoad += HandleAdFailedToLoad;
        bannerView.AdOpened += HandleAdOpened;
        bannerView.AdClosing += HandleAdClosing;
        bannerView.AdClosed += HandleAdClosed;
        bannerView.AdLeftApplication += HandleAdLeftApplication;
        // Load a banner ad.
        bannerView.LoadAd(createAdRequest());
    }

    private void RequestInterstitial()
    {
		Debug.Log("request interstitial");
		interstitialcountrequest++;
        #if UNITY_EDITOR
            string adUnitId = "unused";
        #elif UNITY_ANDROID
		string adUnitId = "ca-app-pub-9393438190116381/9873615799";
        #elif UNITY_IPHONE
		string adUnitId = "ca-app-pub-9393438190116381/9873615799";
        #else
            string adUnitId = "unexpected_platform";
        #endif

        // Create an interstitial.
        interstitial = new InterstitialAd(adUnitId);
        // Register for ad events.
        interstitial.AdLoaded += HandleInterstitialLoaded;
        interstitial.AdFailedToLoad += HandleInterstitialFailedToLoad;
        interstitial.AdOpened += HandleInterstitialOpened;
        interstitial.AdClosing += HandleInterstitialClosing;
        interstitial.AdClosed += HandleInterstitialClosed;
        interstitial.AdLeftApplication += HandleInterstitialLeftApplication;
        // Load an interstitial ad.
        interstitial.LoadAd(createAdRequest());
    }

    // Returns an ad request with custom ad targeting.
    private AdRequest createAdRequest()
    {
        return new AdRequest.Builder()
                .AddTestDevice(AdRequest.TestDeviceSimulator)
				.AddTestDevice("123456")
                .AddKeyword("game")
                .SetGender(Gender.Male)
                .SetBirthday(new DateTime(1985, 1, 1))
                .TagForChildDirectedTreatment(false)
                .AddExtra("color_bg", "9B30FF")
                .Build();

    }

    private void ShowInterstitial()
    {
		Debug.Log("try to show interstitial");
        if (interstitial.IsLoaded())
        {
            interstitial.Show();
			interstitialcountrequest--;
			RequestInterstitial();
			Debug.Log("show interstitial");
        }
        else
        {
			if(OnGoogleInterstitialNotLoaded!=null) OnGoogleInterstitialNotLoaded();
			Debug.Log("interstitial is not ready yet.");
			RequestInterstitial();
        }
    }

    #region Banner callback handlers

    public void HandleAdLoaded(object sender, EventArgs args)
    {
        print("HandleAdLoaded event received.");
    }

    public void HandleAdFailedToLoad(object sender, AdFailedToLoadEventArgs args)
    {
        print("HandleFailedToReceiveAd event received with message: " + args.Message);
    }

    public void HandleAdOpened(object sender, EventArgs args)
    {
        print("HandleAdOpened event received");
    }

    void HandleAdClosing(object sender, EventArgs args)
    {
        print("HandleAdClosing event received");
    }

    public void HandleAdClosed(object sender, EventArgs args)
    {
        print("HandleAdClosed event received");
    }

    public void HandleAdLeftApplication(object sender, EventArgs args)
    {
        print("HandleAdLeftApplication event received");
    }

    #endregion

    #region Interstitial callback handlers

    public void HandleInterstitialLoaded(object sender, EventArgs args)
    {
        print("HandleInterstitialLoaded event received.");
    }

    public void HandleInterstitialFailedToLoad(object sender, AdFailedToLoadEventArgs args)
    {
        print("HandleInterstitialFailedToLoad event received with message: " + args.Message);
    }

    public void HandleInterstitialOpened(object sender, EventArgs args)
    {
        print("HandleInterstitialOpened event received");
    }

    void HandleInterstitialClosing(object sender, EventArgs args)
    {
        print("HandleInterstitialClosing event received");
		if(OnGoogleInterstitialClosed!=null) OnGoogleInterstitialClosed();
    }

    public void HandleInterstitialClosed(object sender, EventArgs args)
    {
        print("HandleInterstitialClosed event received");
    }

    public void HandleInterstitialLeftApplication(object sender, EventArgs args)
    {
        print("HandleInterstitialLeftApplication event received");
    }

    #endregion
}
