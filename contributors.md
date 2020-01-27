---
title: المساهمون في المشروع
layout: contributors
permalink: /contributors.html
---

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->


<br>
<div class="container text-right" id="contributors">
  <h3>قائمة المساهمين</h3>
  <p class="text-right text-muted">يمكن أن تكون أحد المساهمين في المشروع عند 
  <a href="{{ site.github.repository_url }}" title="Open up a pull request">فتح طلب </a>
   لإضافة كلمة إلى القاموس و قبوله</p>  
  <br>
  <div class="row">
    {% for contributor in site.github.contributors %}
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="card">
        <img src="{{ contributor.avatar_url }}" class="card-img-top">
        <div class="card-body">
          <a href="{{ contributor.html_url }}">
            <h5 class="card-title">{{ contributor.login }}</h5>
            <p class="card-text">
              Commits: <span>{{ contributor.contributions }}</span>
            </p>
          </a>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->