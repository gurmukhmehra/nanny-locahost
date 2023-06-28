<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="UTF-8">
<title>Over 11,000 Super Nannies and Babysitters in the Seattle Area!</title>
<meta name="description" content="Looking for an experienced nanny? Sign up for the best childcare and babysitting services in the Seattle area. Personal support from our...">
<meta name="keywords" content="Seattle,NannyParentConnection">
<link rel="icon" type="image/x-icon" href="{{ asset('assets//images/cropped-motherhood.png') }}">
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<meta name="csrf-token" content="{{ csrf_token() }}"/>
<link href="{{ mix('css/app.css') }}" rel="stylesheet">
<link href="{{ asset('assets/css/style.css') }}" rel="stylesheet"/>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css"/>
<script src="{{ asset('assets/js/bootstrap.min.js') }}"></script>
<link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.1.1/css/all.css"/>
<script src="https://js.stripe.com/v3/"></script>
<!-- Owl Stylesheets -->
<link rel="stylesheet" href="{{ asset('assets/css/owl.carousel.min.css') }}"/>
<link rel="stylesheet" href="{{ asset('assets/css/owl.theme.default.min.css') }}"/>

<link rel="stylesheet" href="{{ asset('assets/userDashboard/css/bootstrap.min.css') }}"/>
<link rel="stylesheet" href="{{ asset('assets/userDashboard/css/style.css') }}"/>
<link rel="stylesheet" href="{{ asset('assets/userDashboard/css/typography.css') }}"/>
<link rel="stylesheet" href="{{ asset('assets/userDashboard/css/remixicon.css') }}"/>

<script src="{{ asset('assets/js/jquery-1.11.1.min.js') }}"></script>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<style>
  .owl-prev, .owl-next {
    background-color:#000 !important;
  }
</style>
<script src="https://js.stripe.com/v3/"></script>
</head>

<body> 
  @if (Auth::check())
      <script>
          window.Laravel = {!!json_encode([
              'isLoggedin' => true,
              'user' => Auth::user()
          ])!!}
      </script> 
  @else
      <script>
          window.Laravel = {!!json_encode([
              'isLoggedin' => false
          ])!!}
      </script>
  @endif   
<div id="app"> </div>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDqj9mUsMOMECP1yhD9xrcNy1RCUK50R40&libraries=places&region=us"></script>

    <script src="{{ asset('assets/userDashboard/js/jquery.min.js') }}"></script>
    
    <script src="{{ asset('assets/userDashboard/js/popper.min.js') }}"></script>
    <script src="{{ asset('assets/userDashboard/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/userDashboard/js/smooth-scrollbar.js') }}"></script>
    <script src="{{ asset('assets/userDashboard/js/custom.js') }}"></script>
     
<script src="{{ mix('js/app.js') }}"></script>
<script src="//code.tidio.co/9euod6h4zejuvmox4m83ojdvyxqzfq88.js" async></script>
<script src="{{ asset('assets/js/app.js') }}"></script>
</body>
</html>
