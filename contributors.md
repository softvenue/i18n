---
title: المساهمون في المشروع
layout: contributors
permalink: /contributors.html
---

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

يمكن أن تكون من أحد المساهمون في المشروع بمجرد <a href="{{ site.github.repository_url }}" title="Pull request">فتح طلب
  تغيير</a> لإضافة كلمة إلى القاموس
<br>
<div class="container" id="contributors">
  <h1>Contributors to this project</h1>
  <br>
  <div class="row">

    {% for contributor in site.github.contributors %}
    <div class="col-sm-6 col-md-4 col-lg-3"></div>
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
  </div>
  {% endfor %}
</div>
</div>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->